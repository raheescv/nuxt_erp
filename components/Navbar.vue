<template>
    <nav class="side-nav z-50 -mt-4 hidden w-[100px] overflow-x-hidden px-5 pb-16 pt-32 md:block xl:w-[260px] ">
        <ul>
            <li>
                <NuxtLink to="/" class="side-menu">
                    <span class="side-menu__icon">
                        <Icon name="material-symbols:dashboard" />
                    </span>
                    <span class="side-menu__title">
                        Dashboard
                    </span>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink class="side-menu">
                    <span class="side-menu__icon">
                        <Icon name="material-symbols:settings" />
                    </span>
                    <span class="side-menu__title">
                        Settings
                        <span class="side-menu__sub-icon ">
                            <Icon name="icon-park-outline:down" />
                        </span>
                    </span>
                </NuxtLink>
                <ul>
                    <li>
                        <NuxtLink to="/products" class="side-menu">
                            <span class="side-menu__icon">
                                <Icon name="fa6-brands:product-hunt" />
                            </span>
                            <span class="side-menu__title">
                                Products
                            </span>
                        </NuxtLink>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>