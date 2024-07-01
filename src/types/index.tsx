export type PostImage = {
    date?: string,
    explanation?: string,
    media_type?: string,
    url?: string,
    title?: string,
    service_version?:string,
}

export type RootStackParams = {
    Home: undefined;
    Detail: PostImage
}