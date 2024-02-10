"use client";
import { Anchor, Group, ActionIcon, rem } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./FooterSocial.module.css";
import Link from "next/link";
import { useContext } from "react";
import { ColorProviderContext } from "@/app/ColorProvider";

const links = [
  { link: "/contact", label: "Contact" },
  { link: "/about", label: "About" },
  { link: "#", label: "Blog" },
  { link: "#", label: "Store" },
  { link: "#", label: "Careers" },
];


export default function FooterSocial() {
  const items = links.map((link) => (
    <Link key={link.label} href={link.link} className="TextDecorationNone">
      {/* <Anchor c="dimmed" lh={1} size="sm"> */}
        {link.label}
      {/* </Anchor> */}
    </Link>
  ));

  const { color } = useContext(ColorProviderContext);

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <MantineLogo size={28} type="full" color={color}/>

        <Group className={classes.links}>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandTwitter
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandYoutube
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandInstagram
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}
