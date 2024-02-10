import SpecialityList from "./SpecialityList";
import { Center, Container, SimpleGrid, Title } from "@mantine/core";
import { createClient } from "@/utils/supabase/supabaseServer";
import { speciality } from "@/components/Types";
import { cookies } from "next/headers";

export default async function Specialties() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  let specialties: speciality[] = [];
  let result = await supabase
    .from("specialty_with_url_view")
    .select("*")
    .order("specialty_name", { ascending: true });
  if (result.data !== null) {
    specialties = result.data;
  }

  return (
    <section id="specialities">
      {/* <Center m={100}>
        {" "}
        <Title> Specialties </Title>{" "}
      </Center> */}
      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: 10, sm: "xl" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
      >
        <SpecialityList specialties={specialties} />
      </SimpleGrid>
    </section>
  );
}
