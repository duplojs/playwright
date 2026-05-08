declare module "@duplojs/utils" {
    interface ReservedKindNamespace {
        DuplojsPlaywright: true;
    }
}
export declare const createDuplojsPlaywrightKind: <GenericName extends string, GenericKindValue extends unknown = unknown>(name: GenericName & import("@duplojs/utils/string").ForbiddenString<GenericName, "@" | "/">) => import("@duplojs/utils").KindHandler<import("@duplojs/utils").KindDefinition<`@DuplojsPlaywright/${GenericName}`, GenericKindValue>>;
