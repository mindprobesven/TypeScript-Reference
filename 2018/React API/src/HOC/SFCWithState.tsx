import * as React from 'react'

import { withState } from './WithState';
import SomeSFC from './SomeSFC';

const SFCWithState = withState(SomeSFC)

export default SFCWithState