export default async function getUserProfile(token:string) {

    const response = await fetch("https://vaccine-app-backend.vercel.app:443/api/v1/auth/me", {
        method: "GET",
        headers: {
            authorization: `Bearer ${token}`, 
        }
    })

    if(!response.ok) {
        throw new Error("Cannot get user profile")
    }

    const responseData = await response.json();

    return responseData;
}
