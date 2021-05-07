import { DEFAULT_APIPATH } from "../../definitions/constants";

export type ConfigValue = number | string | boolean;

export type ConfigOption = BaseConfigOption &
    (NumConfigOption | StrConfigOption | PwdConfigOption | BoolConfigOption | EnumConfigOption);

export interface BaseConfigOption {
    id: string;
}

export interface NumConfigOption extends BaseConfigOption {
    type: "num";
    value: number;
    min?: number;
    max?: number;
    callback?: (oldValue: number, newValue: number) => void;
}
export interface StrConfigOption extends BaseConfigOption {
    type: "str";
    value: string;
    callback?: (oldValue: string, newValue: string) => void;
}
export interface PwdConfigOption extends BaseConfigOption {
    type: "pwd";
    value: string;
    callback?: (oldValue: string, newValue: string) => void;
}
export interface BoolConfigOption extends BaseConfigOption {
    type: "bool";
    value: boolean;
    callback?: (oldValue: boolean, newValue: boolean) => void;
}
export interface EnumConfigOption extends BaseConfigOption {
    type: "enum";
    possibleValues: Record<string, string>;
    value: string;
    callback?: (oldValue: string, newValue: string) => void;
}

export type ConfigMap = {
    [key: string]: ConfigOption;
};

export enum jobsWidgetOptions {
    ALWAYS = "always",
    AUTO = "auto",
    NEVER = "never"
}

const configOptions: ConfigMap = {
    githubtoken: {
        id: "config.githubtoken",
        type: "pwd",
        value: ""
    },
    apipath: {
        id: "config.apipath",
        type: "str",
        value: DEFAULT_APIPATH
    },
    jobpollinactive: {
        id: "config.jobpollinactive",
        type: "num",
        value: 15
    },
    jobpollactive: {
        id: "config.jobpollactive",
        type: "num",
        value: 5
    },
    jobswidgetdisplay: {
        id: "config.jobswidgetdisplay",
        type: "enum",
        possibleValues: jobsWidgetOptions,
        value: jobsWidgetOptions.AUTO
    },
    instanceprobetimer: {
        id: "config.instanceprobetimer",
        type: "num",
        value: 60
    }
};

export default configOptions;
