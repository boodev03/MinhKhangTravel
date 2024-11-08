import axiosClient from "@/config/axiosClient";
import { ApiPayload } from "@/types/api-payload";

export const sendMessage = async (payload: ApiPayload) => {
    try {
        await axiosClient.post("/api/message", payload);
        return {
            success: true,
            message: "Message sent successfully",
        }
    } catch (error) {
        console.error("Error submitting form:", error);
        return {
            success: false,
            message: "Error sending message",
        }
    }
}