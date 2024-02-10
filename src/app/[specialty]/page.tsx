import ModuleList from "@/components/moduleList/ModuleList";
import NothingToShow from "@/components/nothingToShow/NothingToShow";
import { createClient } from "@/utils/supabase/supabaseServer";
import { Center, Container, Flex, Space, Text, Title } from "@mantine/core";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import { cookies } from "next/headers";
import Link from "next/link";
import NotFound from "../not-found";
export default async function Page({
  params,
}: {
  params: { specialty: string };
}) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { specialty } = params;
  const { data: specialtyName } = await supabase
    .from("specialty")
    .select("*")
    .eq("specialty_id", specialty)
    .single();
  const { data: modules } = await supabase
    .from("module")
    .select("*")
    .eq("specialty_id", specialty);
  const module_names = modules?.map(({ module_name, ...rest }) => module_name);
  return (
    <>
      {modules == null ? (
        <NotFound />
      ) : (
        <>
          <Container>
            <Flex align={"center"} justify={"space-between"}>
              <Link
                href={`/`}
                className="TextDecorationNone"
                style={{ borderRadius: "9999rem", marginTop: "1rem" }}
              >
                <IconArrowNarrowLeft strokeWidth={2} size="3.2rem" />
              </Link>
              <Text tt={"capitalize"} size="xl" fw={600} truncate="end">
                {specialtyName?.specialty_name}
              </Text>
              <Space w="12vw" />
            </Flex>
          </Container>
          <Container>
            <Space h={"2rem"} />

            <ModuleList
              module_names={module_names!}
              modules={modules!}
              specialty={specialty}
            />
            <Space h={"2rem"} />
          </Container>
        </>
      )}
    </>
  );
}
