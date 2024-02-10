import NotFound from "@/app/not-found";
import CourseList from "@/components/courseList/CourseList";
import { createClient } from "@/utils/supabase/supabaseServer";
import { Container, Flex, Space, Text, Title } from "@mantine/core";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function CoursePage({
  params,
}: {
  params: { module: string; specialty: string };
}) {
  const { module, specialty } = params;
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: moduleName } = await supabase
    .from("module")
    .select("*")
    .eq("module_id", module)
    .single();
  const { data: courses } = await supabase
    .from("course")
    .select("*")
    .eq("module_id", module);
  const course_names = courses?.map(({ course_name }) => course_name);
  console.log(courses?.length);
  return (
    <>
      {courses == null ? (
        <NotFound />
      ) : (
        <>
          <Container>
            <Flex align={"center"} justify={"space-between"}>
              <Link
                className="TextDecorationNone"
                style={{ borderRadius: "9999rem", marginTop: "1rem" }}
                href={`/${specialty}`}
              >
                <IconArrowNarrowLeft strokeWidth={2} size="3.2rem" />
              </Link>
              <Text tt={"capitalize"} size="xl" fw={600} truncate="end">
                {moduleName?.module_name}
              </Text>
              <Space w="12vw" />
            </Flex>
          </Container>

          <Container>
            <Space h={"2rem"} />

            <CourseList
              courses={courses!}
              course_names={course_names!}
              specialty={specialty}
              module={module}
            />
            <Space h={"2rem"} />
          </Container>
        </>
      )}
    </>
  );
}
