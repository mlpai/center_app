import Intro from "../screens/auth/Intro";
import Login from "../screens/auth/Login";
import constant from "./constant";

interface navigationScreen {
    name : string,
    component : React.ComponentType<any>
}

export const AUTH_SCREEN : navigationScreen[] = [
    { name: constant.home, component: Login}
];

export const NON_AUTH_SCREEN : navigationScreen[] = [
    { name: constant.intro, component: Intro },
    { name: constant.login, component: Login }
];
