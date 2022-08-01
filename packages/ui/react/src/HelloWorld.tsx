import { helloWorld } from 'typescript-monorepo-base';
import React, { useMemo } from 'react';

export function HelloWorld() {
    const text = useMemo(() => helloWorld(), []);
    return <h1>{text}</h1>;
}
