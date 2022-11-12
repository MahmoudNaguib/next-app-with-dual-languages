import '../styles/globals.css'
import DefaultLayout from "../layouts/DefaultLayout";
import { appWithTranslation } from "next-i18next";
function MyApp({Component, pageProps}) {
    return (
        <DefaultLayout>
            <Component {...pageProps} />
        </DefaultLayout>
    )
}

export default appWithTranslation(MyApp);