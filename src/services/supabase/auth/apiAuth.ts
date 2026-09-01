import { supabase } from "@/lib/supabase";
type loginProps = {
    email:string;
    password : string
}

type SignUpProps = {
    email:string;
    password : string
    fullName:string
}

export async function login({email,password}:loginProps){
    const { data, error} = await supabase.auth.signInWithPassword({
    email,
    password
    })

    if(error){
        console.error(error.message);
        throw new Error(error.message);
    }

    return data;
}

export async function getCurrentUser(){
    const {data:sessions} = await supabase.auth.getSession();
    if(!sessions?.session) return;
    const {data,error} = await supabase.auth.getUser();
    if(error) throw new Error(error.message);

    return data?.user
}

export async function signUp({email,password,fullName}:SignUpProps){
    const {data,error} = await supabase.auth.signUp({
        email,
        password,
        options:{
            data:{
                fullName,
                avatar:'',
            }
            ,
            emailRedirectTo: "https://movie-night-11.vercel.app/home",
        }
    })

    if (error) {
        console.error(error);
        throw new Error(error.message);
    }

     if (data.user && data.user.identities?.length === 0) {
        throw new Error("Email is already registered");
    }
    
    return data
}

export async function loginWithGoogle(){
    const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options:{
        redirectTo: `${window.location.origin}/home`,
    }
    })

    if (error) {
        console.error(error);
        throw new Error(error.message);
    }

    return data;
}

export async function getProfile(userId:string) {
  const { data, error } = await supabase
    .from('profile')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) throw error;

  return data;
}

export async function updateProfile({image,full_name,userId}:{image:File|null,full_name:string,userId:string}){

    let avatar_url;

    if(image){

        const imageName = `${Math.random()}-${image.name}`.replaceAll(
            "/",
            "",
        );

        
        const {error : storageError} = await supabase.storage.from('images').upload(imageName,image);

        if (storageError) {
            throw new Error(storageError.message);
        }
        
         avatar_url = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/images/${imageName}`;
    }

      const updateData: {
        full_name: string;
        avatar_url?: string;
        } = {
            full_name,
        };

        if (avatar_url) {
            updateData.avatar_url = avatar_url;
        }

    
    const {data,error} = await supabase.from('profile').update(updateData).eq('id',userId).select().single();

    if(error){
        throw new Error(error.message)
    }

    return data;
}