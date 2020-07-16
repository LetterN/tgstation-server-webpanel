import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface BaseRoute {
    route: string; //must be unique
    name: string;
    file: string;
    loose?: boolean;
    isAuthorized: () => Promise<boolean>;
    cachedAuth?: boolean; //only RouteController should set this
    loginless?: boolean; //if we can route to it even on the login page
}

export interface NormalRoute extends BaseRoute {
    icon: IconProp;
    hidden?: false;
}

export interface HiddenRoute extends BaseRoute {
    hidden: true;
}

export type AppRoute = NormalRoute | HiddenRoute;

export const AppRoutes: {
    [id: string]: AppRoute;
} = {
    home: {
        route: "/",
        name: "routes.home",
        file: "Home",
        icon: "home",
        isAuthorized: (): Promise<boolean> => Promise.resolve(true)
    },
    /*
    instances: {
        route: "/Instance/",
        name: "routes.instances",
        icon: "hdd",
        isAuthorized: async () => false
    },
    userManager: {
        route: "/Users/",
        name: "routes.user_manager",
        icon: "user",
        isAuthorized: async () => false
    },
    */
    admin: {
        route: "/Administration/",
        name: "routes.admin",
        file: "Administration",
        icon: "tools",
        isAuthorized: (): Promise<boolean> => {
            /*if (!CredentialsProvider.isTokenValid()) return false;
            const response = await UserClient.getCurrentUser();

            if (response.code == StatusCode.OK) {
                return !!(
                    response.payload!.administrationRights &
                    (AdministrationRights.ChangeVersion | AdministrationRights.RestartHost)
                );
            }
            return false;*/
            //i realized everyone can GET /Administration so this is pretty useless
            return Promise.resolve(true);
        }
    },
    config: {
        route: "/Configuration/",
        name: "routes.config",
        file: "Configuration",
        hidden: true,
        loginless: true,
        isAuthorized: (): Promise<boolean> => Promise.resolve(true)
    }
};