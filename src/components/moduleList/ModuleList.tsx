"use client";
import { useState } from "react";
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
import Link from "next/link";
import { module } from "../Types";
import NothingToShow from "../nothingToShow/NothingToShow";

type Props = {
  modules: module[];
  module_names: string[];
  specialty: string;
};

export default function ModuleList({
  modules,
  specialty,
  module_names,
}: Props) {
  const [search, setSearch] = useState("");

  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

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

  // Check if the filtered modules array is empty and log the message if so
  const filteredModules = modules.filter((module) => {
    if (
      search === "" ||
      module.module_name.toLowerCase().includes(search.toLowerCase())
    ) {
      return module;
    }
  });

  return (
    <>
      <Autocomplete
        data={module_names}
        leftSection={<IconSearch />}
        rightSectionWidth={160}
        rightSection={rightSection}
        placeholder="Search Module"
        accessKey="f"
        size={"lg"}
        onChange={(e) => setSearch(e)}
      />
      <Space h={"2rem"} />
      <SimpleGrid cols={1} spacing="sm">
        {modules.length === 0 ? (
          <Center>
            <NothingToShow />
          </Center>
        ) : null}
        {filteredModules.length === 0 ? (
          <Center>
            <NothingToShow />
          </Center>
        ) : (
          filteredModules.map((module, index) => (
            <Link
              key={index}
              href={`/${specialty}/${module.module_id}`}
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
                  <Text truncate="end" tt="capitalize" size="lg" fw={600}>
                    {module.module_name}
                  </Text>
                </Container>
              </Box>
            </Link>
          ))
        )}
      </SimpleGrid>
    </>
  );
}
