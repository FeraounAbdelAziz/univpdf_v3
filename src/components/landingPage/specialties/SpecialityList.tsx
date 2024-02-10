import { speciality } from '@/components/Types';
import { Card, CardSection, Group, Badge, Text } from '@mantine/core'
import { nanoid } from 'nanoid'
import Image from 'next/image';
import Link from 'next/link';


type Props = {
    specialties: speciality[]
}
export default function SpecialityList({ specialties }: Props) {

    return (
        <>
            {specialties?.map((speciality: speciality) => {
                return (
                    <Card key={nanoid()} shadow="sm" pb={0} pt={0} pl={15} pr={15} radius="lg" withBorder>
                        <Link href={speciality.specialty_id} className='TextDecorationNone'>
                            <CardSection >

                                <Image
                                    src={speciality.image_url}
                                    height={200}
                                    width={200}
                                    sizes="100vw"
                                    layout="responsive"
                                    objectFit="cover"
                                    objectPosition="center"
                                    alt="Norway"
                                />


                            </CardSection>

                            <Group justify="space-between" mt="md" mb="xs">
                                <Text fw={700}>{speciality.specialty_name}</Text>
                                <Badge color="green">New</Badge>
                            </Group>

                            <Text  size="sm" mb={'lg'} c="dimmed">
                                {speciality.specialty_description}
                            </Text>
                        </Link>
                    </Card>
                )
            })}
        </>
    )
}
