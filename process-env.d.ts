declare global {
    namespace NodeJS {
        interface ProcessEnv {
            [key: string]: string | undefined;
            REACT_APP_LINK_ARTICLES: string;
        }
    }
}

