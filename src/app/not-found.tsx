"use client";
import { Title, Text, Button, Container, Group, Box } from "@mantine/core";
import classes from "./not_found.module.css";
import { useContext } from "react";
import { ColorProviderContext } from "./ColorProvider";
import Link from "next/link";

export default function NotFound() {
  const { color } = useContext(ColorProviderContext);
  return (
    <Box
      className={classes.root}
      style={{
        backgroundImage: `linear-gradient(-60deg, var(--mantine-color-${color}-4) 0%, var(--mantine-color-${color}-7) 100%)`,
      }}
      h={"90vh"}
      pt={"50"}
    >
      <Container>
        <Text c={"white"} className={classes.label}>
          404
        </Text>
        <Title className={classes.title}>You have found a secret place.</Title>
        <Text size="lg" ta="center" className={classes.description}>
          Unfortunately, this is only a 404 page. You may have mistyped the
          address, or the page has been moved to another URL.
        </Text>
        <Group justify="center">
          <Link href='/' className="TextDecorationNone">
          <Button variant="white" size="md">
            Go Home
          </Button>
          </Link>
        </Group>
      </Container>
    </Box>
  );
}
