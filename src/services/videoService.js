import { createClient } from "@supabase/supabase-js"

const PROJECT_URL = "https://wctfgooddcomlrpalhis.supabase.co";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndjdGZnb29kZGNvbWxycGFsaGlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg2OTEzNzUsImV4cCI6MTk4NDI2NzM3NX0.L6qRwGnmeHwLdUwHjkIMgCwxltXG8qEjcGv4Q67gtlI"
const supabase = createClient(PROJECT_URL, API_KEY)

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                .select("*")
                
        }
    }
}