import { Title, List, ThemeIcon, rem, ListItem, Group, Button, Text, Image } from '@mantine/core'
import { IconCheck } from "@tabler/icons-react";
import classes from './HeroSection.module.css';
import hero from '../../../../public/hero.svg'
import React from 'react'
import Link from 'next/link';

export default function HeroSection() {

    return (
        <section className={classes.heroSection}>
            <div className={classes.inner}>
                <div className={classes.content}>
                    <Title className={classes.title}>
                        UnivPDF
                    </Title>
                    <Text c="dimmed" mt="md">
                        The ultimate resource for top-quality university study materials.
                    </Text>

                    <List
                        mt={30}
                        spacing="sm"
                        size="sm"
                        icon={
                            <ThemeIcon size={20} radius="xl">
                                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
                            </ThemeIcon>
                        }
                    >
                        <ListItem>
                            <b>All Subjects Covered </b> – Explore a wide range of university courses, conveniently sorted for quick access.
                        </ListItem>
                        <ListItem>
                            <b>Quality Assurance </b> – Count on us for high-caliber study materials that elevate your learning.
                        </ListItem>
                        <ListItem>
                            <b>Instant Access, No Hassle </b> – Say goodbye to time-consuming searches. UnivPDF simplifies your study routine with easy, one-click access to essential resources.
                        </ListItem>
                    </List>

                    <Group mt={30}>
                    <Link className='TextDecorationNone' href={"#specialities"}><Button  variant="filled" radius="xl" size="md" className={classes.control}>
                            Get started
                        </Button></Link>
                    </Group>
                </div>
                <Image src={hero.src} className={classes.image} color='red'/>
            </div>
        </section>
    )
}
