"use client";
import Link from "next/link";
import { course } from "../Types";
import {
  Autocomplete,
  Box,
  Center,
  Container,
  Kbd,
  SimpleGrid,
  Space,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import NothingToShow from "../nothingToShow/NothingToShow";

type Props = {
  courses: course[];
  course_names: string[];
  module: string; // params
  specialty: string; // params
};
export default function CourseList({
  courses,
  specialty,
  module,
  course_names,
}: Props) {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const [searchCourse, setSearchCourse] = useState("");
  const uniqueCourses = new Set(course_names);
  const rightSection = (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Kbd>Shift</Kbd>
      <span style={{ margin: "0 5px" }}>+</span>
      <Kbd>Alt</Kbd>
      <span style={{ margin: "0 5px" }}>+</span>
      <Kbd>F</Kbd>
    </div>
  );
  const filteredCourses = courses.filter((course) => {
    if (
      searchCourse === "" ||
      course.course_name.toLowerCase().includes(searchCourse.toLowerCase())
    ) {
      return module;
    }
  });

  return (
    <>
      <Autocomplete
        data={Array.from(uniqueCourses) as string[]}
        leftSection={<IconSearch />}
        rightSectionWidth={160}
        rightSection={rightSection}
        placeholder="Search Course"
        accessKey="f"
        size={"lg"}
        onChange={(e) => setSearchCourse(e)}
      />
      <Space h={"2rem"} />

      <SimpleGrid cols={1} spacing="sm">
        {courses.length === 0 ? (
          <Center>
            <NothingToShow />
          </Center>
        ) : (
          <>
            {filteredCourses.length === 0 ? (
              <Center>
                <NothingToShow />
              </Center>
            ) : (
              filteredCourses
                ?.filter((course) => {
                  if (searchCourse === "") {
                    return course;
                  } else if (
                    course.course_name
                      .toLowerCase()
                      .includes(searchCourse.toLowerCase())
                  ) {
                    return course;
                  }
                })
                .map((course, index) => {
                  return (
                    <Link
                      key={index}
                      href={`/${specialty}/${module}/${course.course_id}`}
                      className="TextDecorationNone"
                    >
                      <Box
                        component="div"
                        m={2}
                        p={10}
                        ta={"left"}
                        fz={"lg"}
                        bg={
                          colorScheme === "dark"
                            ? theme.colors.dark[6]
                            : theme.colors.gray[2]
                        }
                        style={{ borderRadius: "0.4rem" }}
                      >
                        <Container size="md">
                          <Text
                            truncate="end"
                            tt="capitalize"
                            size="md"
                            fw={600}
                          >
                            {course.course_name}
                          </Text>
                        </Container>
                      </Box>
                    </Link>
                  );
                })
            )}
          </>
        )}
      </SimpleGrid>
    </>
  );
}
