import Layout from "@/components/Layout";
import {
    ErrorNotification,
    SuccessNotification,
} from "@/components/Notifications";
import { montserrat } from "@/components/Fonts";

export default function NotFound() {
    return (
        <Layout title="Munchbox - Not Found">
            <div className={`NotFound ${montserrat.className}`}>
                <div>The page you requested does not exist.</div>
                <ErrorNotification
                    duration={5}
                    message="The page could not be found on the server."
                />
            </div>
        </Layout>
    );
}
