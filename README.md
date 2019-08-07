# useFetch

> React hook for fetching json data

> **Note:** This is using the new [React Hooks API](https://reactjs.org/docs/hooks-intro.html)
>
> You'll need to install `react`, `react-dom`, etc at `^16.8.0` or above

## Install

```sh
yarn add @alobato/usefetch
```

## Usage

```js
import useFetch from '@alobato/usefetch'

const { data, error, loading } = useFetch('https://api.github.com/repos/alobato/usefetch')

```