import ApplicationInitializationModal from '../../../src/components/modals/ApplicationInitializationModal.vue'

export const modalMixin = {
  data() {
    return {}
  },
  computed: {
    hasBundleBilling() {
      if (this.app && this.app.billing_type_id == 2) {
        return true
      } else {
        return false
      }
    }
  },
  components: {
    ApplicationInitializationModal
  },
  methods: {
    async initializeApp(app) {
      console.log('[this.app-icon] ->', this.app)
      let appDetails = { ...app, clientID: this.clientID }
      try {
        console.log('[app details] ->', appDetails)
        let initializedAppResult = await this.$store.dispatch('application/initializeWebApp', appDetails)
        this.generatedID = true
        this.showSuccessNotification(initializedAppResult.message)

        // Show Modal for App initilaization
        this.initializedAppResult = initializedAppResult.result
        $('#ApplicationInitializationModal').modal({
          show: true,
          keyboard: false,
          backdrop: 'static'
        })
        // ApplicationInitializationModal
        this.isProcessing = false
      } catch (error) {
        console.log('[errors getting applications] ->', error)
        this.isProcessing = false
      }
    }
  }
}
