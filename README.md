# @desco/file-base-64

Permite a conversão rápida de arquivos capturados via InputFile para base64

## Instalação

```
npm install --save @desco/file-base-64
```

## Uso

```
<template>
    <div>
        <input type="file" @change="onChange" multiple>
        <input type="file" @change="onChange">
    </div>
</template>

<script>
import fileBase64 from '@desco/file-base-64'

export default {
    methods: {
        onChange (e) {
            fileBase64(e).then(_base64 => {
                console.log(_base64)
            })
        },
    },
}
</script>
```