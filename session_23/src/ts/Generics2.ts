import {buildCreateApi, createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

interface Module<T> {
    name: T;
}

interface CreateApi<T> {
    apiName: T;
}

const moduleA: Module<string> = { name: 'moduleA' };
const moduleB: Module<'moduleB'> = { name: 'moduleB' };

