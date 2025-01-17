/**
 * This file is ALWAYS at the src/trackingEvents.d.ts path of every folder.
 *
 * It MUST NOT import any type.
 * It MUST export a TrackingEvents type with key->value mappings of tracking event types.
 *
 * This file will be statically analyzed to generate reports, please do follow the
 * suggestions in this comment.
 *
 * Changes to this file would require validation from the @decentraland/data-team
 * to prevent breaking reports
 **/

export type TrackingEvents = {
  /** when users click in "play" */
  open_login_popup: {
    action_type?: 'sign_in' | 'create_account'
  }
  /** when users open a url with a custom catalyst */
  custom_catalyst: {
    catalyst: string
  }
  /** when users reject to connect to a custom catalyst */
  clear_catalyst: {}
  /** when users agree to connect to a custom catalyst */
  trust_catalyst: {}
  /** when users close the login popup or wallet selector */
  close_login_popup: {}
  /** when a provider is selected to play */
  click_login_button: {
    provider_type: string
    action_type?: 'sign_in' | 'create_account'
  }
  /** when user cancel the current login */
  click_cancel_login_button: {}
  /** when user click "I don't have a compatible wallet"  */
  click_incompatible_wallet: {}
  /** when the user disconnects */
  disconnection: {}
  /** explorer-website errors (react, sagas or loading components) */
  explorer_website_error: {
    error: string
  }
  /** explorer-kernel errors (react, sagas or loading components) */
  explorer_kernel_error: {
    error: string
  }
  /** when the app loads and connects the user automatically due to a stored session */
  automatic_relogin: {
    provider_type: string
  }
  /** disable analytics due to a fatal error */
  disable_analytics: {}
  /** enable renderer */
  enable_renderer: {}
  /** Send kernel, website and renderer versions */
  initialize_versions: Record<string, string>
  /** when desktop client was detected */
  desktop_launched: {}

  ab_test: {
    experimentId: string
    variant: string
  }

  /** easily search feature flags and/or variants and it's better for data team */
  feature_flags: {
    featureFlags: string[]
  }

  /** when the user try to switch chain in network mismatch */
  switch_chain: {
    wanted_chain_id: number
    provider_chain_id: number
  }

  /** when the error screen has been displayed */
  explorer_website_error_screen: {
    type: string
    details: string
    extra?: Record<string, any> | undefined
  }

  /** when the mobile screen has been displayed */
  explorer_website_mobile_screen: {}

  /** Attempt to open non-https url */
  invalid_external_url: { url: string }
}

export type SessionTraits = {
  // unique ID for each session. It is generated by the browser each time it starts
  sessionId: string
}
