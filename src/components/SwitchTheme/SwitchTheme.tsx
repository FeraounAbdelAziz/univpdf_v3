'use client'
import { useMantineColorScheme, useComputedColorScheme, ActionIcon, Popover, PopoverDropdown, PopoverTarget, Select, Flex, createTheme } from '@mantine/core';
import { IconSun, IconMoon, IconColorFilter } from '@tabler/icons-react';
import cx from 'clsx';
import classes from './SwitchTheme.module.css';
import { ColorProviderContext } from '@/app/ColorProvider';
import { useContext } from 'react';

export default function SwitchTheme() {


    const { setColorScheme } = useMantineColorScheme();

    const { setColor } = useContext(ColorProviderContext);

    const computedColorScheme = useComputedColorScheme('light');


    return (
        <Flex direction={'column'} gap={'lg'} align={'center'} justify={'space-between'} pos={'fixed'} bottom={20} right={20}>

            <ActionIcon
                onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
                variant="default"
                size="xl"
                radius='2rem'
                aria-label="Toggle color scheme"
            >
                <IconSun className={cx(classes.icon, classes.light)}  stroke={1.5} />
                <IconMoon className={cx(classes.icon, classes.dark)}  stroke={1.5} />
            </ActionIcon>


            <Popover width={'auto'} position="left" withArrow shadow="md">
                <PopoverTarget>
                    <ActionIcon radius={'2rem'}
                        variant="default"
                        size="xl"
                        aria-label="Toggle color scheme">
                        <IconColorFilter />
                    </ActionIcon>
                </PopoverTarget>
                <PopoverDropdown bg="var(--mantine-color-body)">

                    <Flex justify={'space-between'} gap={'sm'}>
                        <ActionIcon radius={'2rem'}
                            variant="default"
                            size="md"
                            aria-label="Toggle color scheme"
                            bg={'blue'}
                            onClick={() => setColor('blue')}
                        />

                        <ActionIcon radius={'2rem'}
                            variant="default"
                            size="md"
                            aria-label="Toggle color scheme"
                            bg={'red'}
                            onClick={() => setColor('red')}
                        />
                        <ActionIcon radius={'2rem'}
                            variant="default"
                            size="md"
                            aria-label="Toggle color scheme"
                            bg={'green'}
                            onClick={() => setColor('green')}
                        />
                        <ActionIcon radius={'2rem'}
                            variant="default"
                            size="md"
                            aria-label="Toggle color scheme"
                            bg={'grape'}
                            onClick={() => setColor('grape')}
                        />
                    </Flex>

                </PopoverDropdown>
            </Popover>










            {/* <Switch
                onChange={() => toggleColorScheme()}
                size="md" color="dark.4" onLabel={sunIcon} offLabel={moonIcon} /> */}
        </Flex>
    );
}