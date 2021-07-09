//import * as React from 'react'
import { withExtraProps } from './withExtraProps';
import SomeClassComponent from './SomeClassComponent';

const SomeClassComponentWithHOC = withExtraProps<SomeClassComponent, any>(SomeClassComponent)

export default SomeClassComponentWithHOC