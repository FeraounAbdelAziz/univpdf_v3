"use client";
import {
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  Space,
  Center,
  Box,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import classes from "./Contact.module.css";
import { ContactIconsList } from "@/components/contactIcons/ContactIcons";
import FooterSocial from "@/components/landingPage/footer/FooterSocial";
import { ColorProviderContext } from "../ColorProvider";
import { useContext } from "react";
import { useForm } from "@mantine/form";
import { Resend } from "resend";
const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

export default function ContactPage() {
  const icons = social.map((Icon, index) => (
    <ActionIcon
      key={index}
      size={28}
      className={classes.social}
      variant="transparent"
    >
      <Icon size="1.4rem" stroke={1.5} />
    </ActionIcon>
  ));
  const { color } = useContext(ColorProviderContext);

  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <>
      <Box
        mt={65}
        className={classes.wrapper}
        style={{
          backgroundImage: `linear-gradient(-60deg, var(--mantine-color-${color}-4) 0%, var(--mantine-color-${color}-7) 100%)`,
        }}
      >
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
          <div>
            <Title className={classes.title}>Contact us</Title>
            <Text className={classes.description} mt="sm" mb={30}>
              Leave your email and we will get back to you within 24 hours
            </Text>

            <ContactIconsList />

            <Group mt="xl">{icons}</Group>
          </div>
          <div className={classes.form}>
          <form onSubmit={form.onSubmit((values) => {
            const resend = new Resend('re_EbnHMkra_PWX5WtNuAHf2JmdZNXrkoTDL');

            
          console.log(resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'azizmahon10@gmail.com',
            subject: 'Hello World',
            html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
          }))
          })}>
            <TextInput
              label="Email"
              placeholder="your@email.com"
              required
              classNames={{ input: classes.input, label: classes.inputLabel }}
              {...form.getInputProps("email")}
            />
            <TextInput
              label="Name"
              placeholder="Dante"
              mt="md"
              required
              classNames={{ input: classes.input, label: classes.inputLabel }}
              {...form.getInputProps("name")}
            />
            <Textarea
              required
              label="Your message"
              placeholder="I want to advice you anything "
              minRows={4}
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
              {...form.getInputProps("message")}
            />

            <Group justify="flex-end" mt="md">
              <Button
                className={classes.control}
                bg={`linear-gradient(-60deg, var(--mantine-color-${color}-4) 0%, var(--mantine-color-${color}-7) 100%)`}
                type="submit"
              >
                Send message
              </Button>
            </Group>
                  </form>
          </div>
        </SimpleGrid>
      </Box>
      <FooterSocial />
    </>
  );
}
