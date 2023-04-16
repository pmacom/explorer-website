import { fetchFlags } from '@dcl/feature-flags'
import { setFeatureFlags } from '../state/actions'
import { store } from '../state/redux'
import { FF_APPLICATION_NAME } from '../state/types'
import { callOnce } from "../utils/callOnce"

export const initializeFeatureFlags = callOnce(async () => {
  if(!process.env.EXPLORER_JSON_PATH){
    console.log("No EXPLORER_JSON_PATH env var found, skipping feature flags initialization")
  }
  
  const ff = await fetchFlags({
    featureFlagsUrl: process.env.EXPLORER_JSON_PATH,
    applicationName: FF_APPLICATION_NAME
  })
  // store.dispatch(setFeatureFlags(ff))
})