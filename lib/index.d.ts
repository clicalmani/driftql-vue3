export type RequestData = {
    method: "GET" | "POST" | "PATCH" | "DELETE",
    body?: BodyInit | null | undefined
}