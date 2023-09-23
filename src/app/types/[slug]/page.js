import { fetchType } from "@/actions/fetch_type";
import Header from "../../components/header";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import TypesList from "../components/types_list";

export default async function Page({ params }) {
    const type = await fetchType(params.slug);

    const components = {
        marks: {
          link: ({children, value}) => {
            return (
              <Link href={value.href} className="font-medium hover:underline">
                {children}
              </Link>
            )
          }
        }
      }

    return (
        <section className="grid grid-cols-12 gap-4">
            <Header title={type.name} />
            <div className="col-span-full sm:col-span-8 lg:col-span-9 portableText">
                <PortableText
                    value={type.descriptionBlock}
                    components={components}
                ></PortableText>
            </div>
            <TypesList />
        </section>
    )
}