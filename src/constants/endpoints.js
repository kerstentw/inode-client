const EXTERNAL_HOST = {
  NODE_API: process.env.NODE_API || "http://localhost:8888"
}

const EXTERNAL_ENDPOINTS = {
  PING: `${EXTERNAL_HOST.NODE_API}/ping`,
  CREATE_ACCOUNT: `${EXTERNAL_HOST.NODE_API}/create_account`,
  GET_ACCOUNT: `${EXTERNAL_HOST.NODE_API}/get_account`,
  GET_NODE_INFO: `${EXTERNAL_HOST.NODE_API}/get_this_node_info`,
  PROPOSER_INFO: `${EXTERNAL_HOST.NODE_API}/proposer_info`,
  PROPOSERS_SUMMARY: `${EXTERNAL_HOST.NODE_API}/proposers_summary`,
  GET_BLOCK_INFO: `${EXTERNAL_HOST.NODE_API}/get_block_info`,
  GET_TRANSACTION_INFO: `${EXTERNAL_HOST.NODE_API}/get_transaction_info`,
  GET_NETWORK_NEWS: `${EXTERNAL_HOST.NODE_API}/get_network_news`,
  GET_LATEST_BLOCKS: `${EXTERNAL_HOST.NODE_API}/get_block_range`,
  GET_TOKEN_INFO: `${EXTERNAL_HOST.NODE_API}/get_token_info?abbr=KLAY`
}

const ROUTE_ENDPOINTS = {
  HOME: "/",
  NODE_MANAGEMENT: "/node_management",
  WALLET_TRACKING: "/wallet_tracking",
  NETWORKS: "/networks",
  DEFI: "/defi"
}

export {
  ROUTE_ENDPOINTS,
  EXTERNAL_ENDPOINTS
};
