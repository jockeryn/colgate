import Alert from './vuestic-components/vuestic-alert/VuesticAlert.vue'

import DataTable
  from './vuestic-components/vuestic-datatable/VuesticDataTable.vue'

import Modal from './vuestic-components/vuestic-modal/VuesticModal.vue'

import Popover from './vuestic-components/vuestic-popover/VuesticPopover.vue'
import PreLoader
  from './vuestic-components/vuestic-preloader/VuesticPreLoader.vue'

import RadioButton
  from './vuestic-components/vuestic-radio-button/VuesticRadioButton.vue'
import Scrollbar
  from './vuestic-components/vuestic-scrollbar/VuesticScrollbar.vue'
import SimpleSelect
  from './vuestic-components/vuestic-simple-select/VuesticSimpleSelect.vue'
import Tooltip from './vuestic-components/vuestic-tooltip/VuesticTooltip.vue'
import Widget from './vuestic-components/vuestic-widget/VuesticWidget.vue'
import DatePicker
  from './vuestic-components/vuestic-date-picker/VuesticDatePicker'
import Card from './vuestic-components/vuestic-card/VuesticCard'
import Tag from './vuestic-components/vuestic-tag/VuesticTag'
import TagGroup from './vuestic-components/vuestic-tag/VuesticTagGroup'
import VuesticDropdown
  from './vuestic-components/vuestic-dropdown/VuesticDropdown'
import Dropdown from './vuestic-directives/Dropdown'
import StickyScroll from './vuestic-directives/StickyScroll'

import VuesticAccordion from './vuestic-components/vuestic-collapse/VuesticAccordion'
import VuesticCollapse from './vuestic-components/vuestic-collapse/VuesticCollapse'
import VuesticPopup
  from './vuestic-components/vuestic-popup/quasar/components/popup/VuesticPopup.vue'

import { installQuasarPlatform } from './vuestic-components/vuestic-popup/quasar/install'

// At the moment we use quasar platform install to make its components work.
// Ideally we want to create similar vuestic platform object that holds needed values.
installQuasarPlatform()

const VuesticPlugin = {
  install (Vue, options) {
    [
      Alert,
      DataTable,
      Modal,
      PreLoader,
      RadioButton,
      Scrollbar,
      SimpleSelect,
      Widget,
      Tooltip,
      Popover,
      VuesticDropdown,
      DatePicker,
      Card,
      Tag,
      TagGroup,
      VuesticPopup,
    ].forEach(component => {
      Vue.component(component.name, component)
    })

    Vue.directive('dropdown', Dropdown)
    Vue.directive('sticky-scroll', StickyScroll)
  },
}

export default VuesticPlugin
