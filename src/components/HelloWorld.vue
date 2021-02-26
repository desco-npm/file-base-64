<template>
    <div class="hello">
        <input type="file" @change="onChange" multiple>
    </div>
</template>

<script>
// import fileBase64 from './FileBase64'
import fileBase64 from '@desco/file-base-64'

export default {
    name: 'HelloWorld',
    methods: {
        onChange (e) {
            fileBase64(e).then(_base64 => {
                console.log(_base64)
            })
        },
    },
}
</script>