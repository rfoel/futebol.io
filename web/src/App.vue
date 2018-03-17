<template>
  <div id="app">
    <page-header></page-header>
    <page-content class="flex-grow"></page-content>
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageHeader from '@/components/layout/PageHeader.vue'
import PageContent from '@/components/layout/PageContent.vue'
import PageFooter from '@/components/layout/PageFooter.vue'

export default {
  name: 'app',
  components: {
    PageHeader,
    PageContent,
    PageFooter
  }
}
</script>