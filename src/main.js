import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
// 위는 default 내용
// 아래는 추가된 내용
// https://docs.amplify.aws/ui/auth/authenticator/q/framework/vue#recommended-usage

import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import {
  applyPolyfills,
  defineCustomElements,
} from '@aws-amplify/ui-components/loader';

Amplify.configure(aws_exports);
applyPolyfills().then(() => {
  defineCustomElements(window);
});