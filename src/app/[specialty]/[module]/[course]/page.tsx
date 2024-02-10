import NotFound from "@/app/not-found";
import FooterSocial from "@/components/landingPage/footer/FooterSocial";
import { createClient } from "@/utils/supabase/supabaseServer";
import { Anchor, Button, Center, Kbd, Space, Text, Title } from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";
import { cookies } from "next/headers";
import React from "react";

export default async function ViewPage({
  params,
}: {
  params: { module: string; specialty: string; course: string };
}) {
  const { course } = params;

  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: course_view } = await supabase
    .from("course")
    .select("file_id,course_name")
    .eq("course_id", course)
    .single();

  const PDF_DRIVE_KEY = course_view?.file_id;
  const PDF_NAME = course_view?.course_name;
  const key = `https://drive.google.com/uc?export=download&id=${PDF_DRIVE_KEY}`;
  const PDF_NAME_WITHOUT_EXTENSION = PDF_NAME?.endsWith(".pdf")
    ? PDF_NAME?.slice(0, -4)
    : PDF_NAME;

  return (
    <>
      {course_view == null ? (
        <NotFound />
      ) : (
        <>
          <Center m={25}>
            <Text truncate={"end"} fw={600} size={"xl"}>
              {PDF_NAME_WITHOUT_EXTENSION}
            </Text>
          </Center>
          <Center>
            <iframe
              style={{ border: "none" }}
              src={`https://drive.google.com/file/d/${PDF_DRIVE_KEY}/preview`}
              width="1024"
              height="580"
              allow="autoplay"
            ></iframe>
          </Center>
          <Space h={60} />
          <Center>
            <Anchor href={key}>
              <Button accessKey="d" rightSection={<IconDownload size={14} />}>
                Download
              </Button>
            </Anchor>
          </Center>
          <Space h={60} />

          <Center>
            <Text>
              {" "}
              <Kbd>shift</Kbd> + <Kbd>Alt</Kbd> + <Kbd>D</Kbd> to download.
            </Text>
          </Center>
          <FooterSocial />
        </>
      )}
    </>
  );
}
