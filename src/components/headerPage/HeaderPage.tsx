import { Container, Flex, Space, Title } from '@mantine/core'
import { IconArrowNarrowLeft } from '@tabler/icons-react'
import React from 'react'

type Props = {
    Name: string;
}

export default function HeaderPage({ Name }: Props) {
    return (
        <Container>
            <Flex align={"center"} justify={"flex-start"}>
                <IconArrowNarrowLeft
                    //   onClick={() => navigate(-1)}
                    strokeWidth={2}
                    size={"4rem"}
                />
                <Space w="22vw" />
                <Title tt={'capitalize'} order={2}>{Name}</Title>
            </Flex>
        </Container>
    )
}
