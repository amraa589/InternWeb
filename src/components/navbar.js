import React from 'react'
import { Navbar,Container,NavDropdown,Nav } from 'react-bootstrap'

const NavBar = () => {
    return (
        <div className="container_one">
            <Navbar bg="" expand="lg" className="header">
                <Container>
                    <Navbar.Brand href="#home">
                    <svg width="270" height="30" viewBox="0 0 180 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M179.631 3.843h-4.923c-.838 1.134-2.579 2.635-4.02 3.002V3.843h-4.153v14.179h4.153v-7.374l.704-.3c1.742 1.701 3.785 4.737 4.32 7.674H180a20.13 20.13 0 00-1.876-5.071c-.938-1.702-2.01-3.137-3.216-4.371 1.843-1.068 3.886-3.136 4.723-4.737zm-12.426 22.953a7.447 7.447 0 01-.938 1.034c-.301.267-.536.4-.67.4-.201 0-.301-.133-.301-.367 0-.1.033-.233.067-.4l-.938.467a1.11 1.11 0 00-.101.5c0 .234.101.4.235.567.167.167.368.234.67.234.301 0 .603-.1.904-.334.302-.2.603-.467.871-.8.234-.3.569-.701.904-1.135l.134.067c-.033.033-.067.134-.134.234-.335.5-.502.967-.502 1.3 0 .2.067.368.201.501.134.1.301.167.469.167.268 0 .77-.267 1.574-.767l.268-.834c-.134.1-.335.2-.57.3-.2.1-.368.167-.435.2h-.134c-.134-.033-.201-.133-.201-.267 0-.1.034-.334.168-.667.134-.367.268-.667.402-.967l.77-1.569-.837-.433c-.235.4-.536.8-.871 1.268-.302.466-.67.9-1.005 1.3zm-3.919 2.768c.469-1.034 1.206-2.468 2.244-4.303l-.837-.434c-.402.7-.838 1.268-1.206 1.735-.402.5-.77.834-1.072 1.068-.301.233-.502.367-.636.4h-.101c-.1 0-.134-.067-.134-.167s.168-.467.503-1.1l1.138-2.07-.87-.466c-.436.767-.871 1.568-1.34 2.435-.436.867-.637 1.468-.637 1.835 0 .267.034.434.168.567.1.1.235.167.368.167.537 0 1.307-.534 2.379-1.635l.067.067c-.168.267-.302.5-.436.7-.871 1.435-1.407 2.57-1.641 3.437l1.005.2c.201-.567.536-1.368 1.038-2.436zm-3.149-11.542h4.154V3.842h-4.154v4.004h-4.823V3.843h-4.153v14.179h4.153v-7.006h4.823v7.006zm-9.445 6.338c-.235 0-.502.067-.837.167-.302.133-.57.267-.838.467l.369.534c.067-.033.1-.067.167-.1.034 0 .067-.034.101-.067.301-.167.502-.233.602-.233.168 0 .269.1.269.3 0 .3-.235.8-.637 1.534-.569.968-1.038 1.468-1.44 1.468-.268 0-.369-.2-.369-.534 0-.166.034-.367.135-.567l-.972.4c-.033.134-.067.3-.067.468 0 .3.1.534.268.734.201.2.436.3.737.3.234 0 .503-.067.804-.2.268-.133.603-.334.971-.634.369-.3.804-.667 1.24-1.134.033-.034.1-.067.134-.134.066-.067.133-.1.167-.133.034-.067.1-.1.167-.167l.034.034-1.106 2.134.67.334c.235-.433.469-.767.67-1.034.168-.267.369-.467.503-.6a5.74 5.74 0 01.469-.4l.067-.068.067-.066.067.033c-.034.033-.034.033-.034.067l-.033.033c0 .034-.034.034-.034.067-.234.333-.335.634-.335.967 0 .6.268.901.804.901.502 0 1.105-.267 1.842-.767l.268-.834c-.201.133-.502.267-.904.467-.369.167-.603.267-.737.267-.167 0-.234-.167-.234-.5 0-.301.167-.668.502-1.102.368-.434.904-.834 1.675-1.267l-.369-.635c-.268.1-.636.3-1.105.6-.502.302-1.072.769-1.742 1.336-.134.1-.201.166-.201.166h-.067c.034-.067.134-.3.335-.667l.704-1.268-.536-.333c-.302.467-.704.9-1.106 1.3-.402.401-.77.735-1.038.935h-.067c.067-.1.1-.133.1-.167.034-.033.068-.066.068-.1l.066-.067c0-.033.034-.066.068-.133.335-.434.502-.867.502-1.234 0-.6-.268-.868-.804-.868zm-5.058-6.338h4.187a57.426 57.426 0 00-1.072-4.638c-.033-.133-.1-.367-.167-.667l-.536-1.702c-.268-.7-.502-1.368-.737-2.001-.268-.634-.502-1.201-.737-1.702a28.663 28.663 0 00-1.909-3.47h-3.952a17.844 17.844 0 00-1.072 1.802l-.335.667-.167.4c-.201.368-.335.768-.503 1.168a37.026 37.026 0 00-1.809 5.072c-.268.9-.502 1.7-.703 2.435-.201.734-.368 1.601-.57 2.636h4.187c.168-.868.335-1.669.536-2.402h4.924c.201.666.301 1.667.435 2.402zm-1.272-5.372h-3.283c.402-1.501 1.005-3.236 1.641-4.604.67 1.134 1.34 3.303 1.642 4.604zm-9.881-1.968c-1.474-2.002-5.494-2.136-8.173-1.768V7.012h7.47v-3.17h-11.657v14.18h6.733c1.473 0 3.181-.268 4.454-1.035 2.244-1.367 2.613-4.237 1.173-6.305zm-3.35 2.569c-.033 1.2-1.005 1.801-2.78 1.801h-2.043l-.033-3.336c1.339-.167 4.856-.5 4.856 1.535zm-8.842 12.077c0-.267-.067-.468-.201-.634-.134-.2-.335-.267-.637-.267-.368 0-.736.1-1.172.3a5.97 5.97 0 00-1.239.868 4.658 4.658 0 00-.972 1.2 2.38 2.38 0 00-.368 1.268c0 .768.402 1.168 1.172 1.168.234 0 .469-.033.704-.067.234-.066.502-.133.804-.233.301-.1.669-.267 1.105-.467l.268-.834c-1.106.5-1.876.734-2.311.734-.168 0-.302-.034-.402-.134a.538.538 0 01-.101-.3c0-.3.101-.634.335-1.067.201-.434.469-.801.804-1.101.302-.334.569-.468.804-.468.1 0 .134 0 .201.034.033.066.067.1.067.133 0 .067-.067.234-.168.434l.771.467c.167-.167.301-.334.402-.5.1-.2.134-.367.134-.534zm-11.79-18.316h4.588v-3.17h-13.33v3.17h4.588v11.01h4.154V7.012zm-9.982 19.483a5.705 5.705 0 00-.803.167l1.004-1.935-.837-.4-2.412 4.67.972.334.938-1.868a6.111 6.111 0 011.674-.367c-.268.5-.435.834-.502 1-.067.134-.101.301-.101.4 0 .235.067.402.235.535.134.133.301.2.536.2.267 0 .87-.267 1.775-.767l.234-.834c-.368.167-.536.267-.569.3-.402.2-.67.3-.804.3s-.201-.066-.201-.2c0-.1.067-.233.134-.4.033 0 .033-.067.067-.134.034-.066.034-.1.067-.133l1.105-2.269-.837-.367-.804 1.702c-.201 0-.502 0-.871.066zm-4.354-8.473h4.153V3.842h-4.153c-1.34 1.235-3.383 3.937-4.053 5.872h-.067c-.67-1.935-2.713-4.637-4.053-5.871h-4.153v14.179h4.153V9.214c1.106 1.368 2.244 4.403 2.713 6.439h2.747c.469-2.036 1.608-5.071 2.713-6.44v8.809zm-10.92 6.505c-.434 0-.904.2-1.473.567a5.87 5.87 0 00-1.44 1.435c-.402.533-.603 1.034-.603 1.468 0 .433.1.734.301.934.201.2.436.3.67.3.368 0 .77-.133 1.24-.467.435-.3.77-.6 1.004-.867l.134-.134h.067c0 .034-.033.1-.067.167-.067.067-.067.167-.1.2a1.615 1.615 0 00-.1.234c0 .1-.034.2-.034.3 0 .133.067.267.2.4.135.1.302.167.503.167.168 0 .436-.067.737-.234.335-.166.603-.333.837-.533l.268-.834a6.39 6.39 0 01-.703.367c-.302.133-.502.2-.57.2-.1 0-.167-.067-.167-.2 0-.134.1-.367.301-.734l1.072-2.102-.87-.467-.135.267c-.267-.3-.602-.434-1.071-.434zm-.736 1.068c.402-.267.737-.434 1.005-.434a.7.7 0 01.536.267l-.603 1.167c-.1.2-.302.434-.603.701-.268.267-.57.467-.871.667-.301.2-.502.3-.67.3-.235 0-.335-.166-.335-.533 0-.3.134-.668.469-1.068.301-.4.636-.767 1.072-1.067zM81.995 13.95c.335-.9.536-1.935.536-3.036 0-.3-.034-.634-.067-1-.067-.334-.134-.701-.201-1.035-.067-.334-.168-.634-.268-.934-.134-.3-.235-.567-.402-.867a6.83 6.83 0 00-2.613-2.636 8.37 8.37 0 00-1.876-.7c-1.34-.3-3.047-.3-4.387 0-.67.166-1.306.4-1.876.7-1.105.634-1.976 1.501-2.646 2.636-.134.3-.234.567-.369.867-.1.3-.2.6-.267.934-.068.334-.134.7-.201 1.035-.034.366-.067.7-.067 1 0 1.101.2 2.136.535 3.036a6.6 6.6 0 001.541 2.369 6.79 6.79 0 002.412 1.468c1.943.734 4.32.734 6.263 0a6.786 6.786 0 002.412-1.468 6.595 6.595 0 001.54-2.369zm-3.785-2.77l-.034.501-.134.868c-.167.6-.469 1.2-.971 1.735-.502.534-1.172.834-2.077.834h-.167c-.904 0-1.574-.3-2.077-.834a4.111 4.111 0 01-.971-1.735l-.134-.868-.033-.5v-.267c0-.667.1-1.334.301-2.001.2-.668.57-1.168 1.072-1.602a3.046 3.046 0 011.674-.567c.168-.033.335-.033.503 0 .67.033 1.206.233 1.675.567.502.434.87.934 1.071 1.602.201.667.302 1.334.302 2.001v.267zM66.654 22.827c-.435 0-.67-.3-.67-.835l-1.005.034c0 1 .436 1.468 1.307 1.468.736 0 1.373-.3 1.976-.968.034-.033.1-.133.234-.266l-.468-.401c-.537.634-.972.968-1.374.968zm-4.79-4.804h4.187V3.842c-2.143 0-4.019-.2-6.196.167-7.135 1.235-7.302 7.907-6.9 14.013h4.187c-.201-3.637-.268-7.674 1.54-9.575.938-1.001 1.943-1.068 3.183-1.068v10.643zm-7.402 3.202c-.636.334-1.206.8-1.775 1.368a7.242 7.242 0 00-1.34 2.002 5.445 5.445 0 00-.502 2.268c0 .5.067.935.268 1.302.167.366.435.667.77.867.302.167.67.267 1.072.267a3.56 3.56 0 001.273-.234c.435-.166.837-.367 1.139-.6l.268-.834c-.302.233-.67.4-1.072.567-.402.167-.77.233-1.105.233-.503 0-.872-.133-1.106-.367-.234-.266-.368-.667-.368-1.2 0-.601.167-1.235.435-1.869a6.518 6.518 0 011.105-1.768c.436-.534.904-.967 1.407-1.268.469-.333.905-.5 1.306-.5.201 0 .335.066.436.167.1.1.134.233.134.333 0 .234-.168.5-.469.834-.335.334-.636.6-.971.834l.87.5c.536-.333.938-.667 1.206-1.034.268-.333.402-.7.402-1.067s-.134-.668-.402-.934c-.301-.234-.67-.367-1.172-.367-.57 0-1.172.166-1.809.5zm-3.115-7.273c.369-.9.536-1.935.536-3.036 0-.3-.033-.634-.067-1-.034-.334-.1-.701-.201-1.035-.067-.334-.168-.634-.268-.934-.1-.3-.234-.567-.368-.867-.67-1.135-1.541-2.002-2.646-2.636a8.1 8.1 0 00-1.842-.7c-.603-.134-1.24-.2-1.91-.234h-.603c-.67.033-1.306.1-1.909.234-.67.166-1.273.4-1.842.7-1.105.634-1.976 1.501-2.646 2.636-.134.3-.268.567-.369.867-.133.3-.2.6-.3.934-.068.334-.135.7-.168 1.035-.068.366-.068.7-.068 1 0 1.101.168 2.136.503 3.036.368.9.871 1.702 1.54 2.369a6.645 6.645 0 002.446 1.468c.938.367 1.976.534 3.081.534h.067c1.105 0 2.144-.167 3.082-.534.971-.334 1.775-.834 2.412-1.468a6.186 6.186 0 001.54-2.369zm-3.751-2.77l-.067.501-.134.868c-.134.6-.469 1.2-.972 1.735-.468.534-1.172.834-2.043.834h-.2c-.872 0-1.575-.3-2.044-.834-.502-.534-.837-1.135-.971-1.735l-.168-.868-.033-.5v-.267c0-.667.1-1.334.335-2.001.2-.668.57-1.168 1.072-1.602.435-.334 1.004-.534 1.674-.567.134-.033.302-.033.47 0 .67.033 1.239.233 1.674.567.502.434.87.934 1.072 1.602.234.667.335 1.334.335 2.001v.267zm-16.68-4.17h5.794V3.844h-9.981v14.179h4.187V7.012zM0 21.853h21.915V0H0v21.852zM9.63 1.44c4.321-.634 8.374 1.702 10.15 5.405.334.734.803 1.868.803 2.702h-8.575l-3.08 5.605h-3.15l4.489-8.307h6.23c-1.206-1.735-3.249-2.77-5.493-2.77-3.819 0-6.9 3.07-6.9 6.84s3.081 6.84 6.9 6.84a6.947 6.947 0 005.46-2.67h-4.489l1.54-2.769h7.068a8.584 8.584 0 01-.837 2.77c-1.374 2.802-4.12 4.87-7.37 5.337-5.291.734-10.215-2.902-10.952-8.14C.654 7.044 4.338 2.173 9.63 1.439zm47.277 25.09c-.401.533-.602 1.034-.602 1.468 0 .433.1.734.334.934.201.2.402.3.637.3.368 0 .804-.133 1.24-.467.468-.3.803-.6 1.004-.867.067-.067.134-.1.167-.134h.034c0 .034-.034.1-.067.167-.034.067-.067.167-.1.2 0 .067-.034.134-.068.234-.033.1-.033.2-.033.3 0 .133.033.267.167.4.134.1.302.167.503.167.2 0 .435-.067.77-.234a7.19 7.19 0 00.838-.533l.267-.834c-.2.1-.435.233-.736.367-.269.133-.47.2-.536.2-.134 0-.168-.067-.168-.2 0-.134.1-.367.268-.734l1.072-2.102-.87-.467-.135.267c-.234-.3-.603-.434-1.038-.434-.436 0-.938.2-1.507.567a5.87 5.87 0 00-1.44 1.435zm.637 1.2c0-.3.167-.667.469-1.067a5.4 5.4 0 011.071-1.067c.402-.267.737-.434 1.005-.434.235 0 .402.1.57.267l-.637 1.167c-.1.2-.301.434-.57.701-.267.267-.569.467-.87.667-.302.2-.536.3-.67.3-.234 0-.368-.166-.368-.533zm4.656.234c-.135.267-.168.5-.168.634 0 .234.033.4.168.5.1.1.234.134.368.134.502 0 1.273-.5 2.311-1.535.301-.333.502-.5.502-.5l.067.033c-.435.6-.636 1.035-.67 1.301v.234c0 .134.067.267.201.334.101.1.201.133.335.133s.436-.1.804-.267c.402-.166.704-.334.938-.5l.302-.834c-.235.1-.436.2-.637.3-.268.167-.435.234-.536.234-.134 0-.2-.067-.2-.2 0-.067.033-.167.066-.234l1.34-2.502-.837-.4c-.235.433-.503.8-.77 1.067-.235.3-.637.667-1.14 1.134-.401.367-.67.6-.804.7-.133.1-.234.168-.335.168-.1 0-.133-.067-.133-.167v-.034c0-.033.033-.133.1-.267l1.44-2.702-.837-.433c-.603 1.1-1.038 1.901-1.306 2.468-.268.534-.47.934-.57 1.201zm7.335-3.636l-2.378 4.67.97.334.905-1.868a6.066 6.066 0 011.709-.367c-.268.5-.436.834-.503 1-.067.134-.1.301-.1.4 0 .235.066.402.2.535.168.133.336.2.537.2.3 0 .904-.267 1.775-.767l.268-.834c-.369.167-.536.267-.603.3-.369.2-.637.3-.77.3-.135 0-.202-.066-.202-.2 0-.1.067-.233.134-.4l.067-.134c0-.066.034-.1.034-.133l1.139-2.269-.838-.367-.803 1.702c-.201 0-.503 0-.905.066-.402.067-.67.134-.77.167l1.005-1.935-.871-.4zm8.24 2.469c-.235.433-.369.867-.369 1.267 0 .768.402 1.168 1.206 1.168.234 0 .469-.033.703-.067.235-.066.503-.133.804-.233.268-.1.67-.267 1.105-.467l.268-.834c-1.139.5-1.909.734-2.344.734-.168 0-.268-.034-.369-.134-.067-.1-.134-.2-.134-.3 0-.3.134-.634.335-1.067.235-.434.503-.801.804-1.101.335-.334.603-.468.837-.468.067 0 .134 0 .168.034.067.066.067.1.067.133 0 .067-.034.234-.168.434l.804.467c.134-.167.268-.334.369-.5.1-.2.167-.367.167-.534 0-.267-.067-.468-.2-.634-.135-.2-.37-.267-.637-.267-.369 0-.77.1-1.206.3-.402.234-.837.5-1.24.868a6.63 6.63 0 00-.97 1.2zm15.876-4.27l.268-.267-.503-.401c-.502.634-.971.968-1.34.968-.435 0-.67-.3-.67-.835l-1.004.034c0 1 .435 1.468 1.306 1.468.703 0 1.373-.3 1.943-.968zm-6.063 5.437c-.1.267-.167.5-.167.634 0 .234.067.4.167.5a.56.56 0 00.369.134c.502 0 1.273-.5 2.31-1.535.336-.333.503-.5.537-.5l.033.033c-.402.6-.636 1.035-.67 1.301v.234c.034.134.1.267.202.334.1.1.234.133.334.133.168 0 .435-.1.838-.267.234-.1.435-.2.603-.3.033.2.133.333.234.4.168.1.335.167.536.167.536 0 1.139-.4 1.775-1.201a.573.573 0 01.201-.2c.034-.067.067-.1.1-.167.202 1.034.537 1.568 1.073 1.568.2 0 .435-.067.703-.267.234-.166.469-.334.636-.5l.268-.834c-.134.1-.368.233-.636.367-.268.133-.436.2-.57.2-.368 0-.602-.367-.67-1.101.838-.834 1.675-1.568 2.513-2.169l-.77-.4c-.302.267-.537.5-.704.634-.134.133-.302.3-.503.467-.167.167-.402.367-.67.634 0-.5-.033-1.101-.033-1.768l-.904-.468c-.034.268-.034.5-.034.735 0 .633.067 1.367.168 2.168-.47.5-.804.834-1.005 1.034-.201.167-.335.267-.469.267-.168 0-.268-.133-.268-.367 0-.1 0-.233.067-.4l-.435.233v-.066c-.201.1-.436.2-.603.3-.268.167-.47.234-.57.234-.1 0-.167-.067-.167-.2 0-.067.033-.167.067-.234l1.306-2.502-.804-.4c-.268.433-.502.8-.77 1.067-.268.3-.637.667-1.139 1.134-.402.367-.67.6-.804.7-.134.1-.268.168-.368.168-.067 0-.135-.067-.135-.167v-.034c0-.033.034-.133.101-.267l1.44-2.702-.837-.433c-.57 1.1-1.005 1.901-1.273 2.468-.301.534-.502.934-.603 1.201zm16.279-1.434c-.335.634-.503 1.134-.503 1.568 0 .333.101.6.369.834.234.2.502.3.803.3.436 0 .871-.133 1.273-.434.369-.267.704-.6.938-.967.268-.367.402-.667.402-.901 0-.066 0-.1.034-.133.033 0 .134-.034.301-.067a2.53 2.53 0 00.603-.267c.134-.067.235-.134.301-.167l.068.067a9.202 9.202 0 00-.738 1.167c-.267.468-.401.868-.401 1.101 0 .4.234.601.67.601.234 0 .502-.067.803-.234.335-.133.603-.3.871-.533l.268-.834c-.569.433-1.005.634-1.206.634-.134 0-.201-.067-.201-.2 0-.067.034-.2.101-.368.1-.167.167-.333.234-.467l1.106-1.968-.771-.434c-.1.2-.301.434-.536.634a3.24 3.24 0 01-.804.5 3.1 3.1 0 01-.904.268c-.167-.134-.402-.234-.804-.234-.167 0-.368.1-.603.234-.201.133-.335.266-.335.4l.134.3c.034.067.067.1.134.1 0 0 .168 0 .47-.067h.066c.034.034.034.034.034.067v.033c0 .1-.1.267-.235.5-.167.268-.335.501-.569.702-.201.2-.402.3-.603.3-.101 0-.167-.067-.234-.134-.068-.066-.101-.166-.101-.3 0-.167.033-.3.067-.4.067-.134.134-.3.268-.534.469-.9.904-1.701 1.373-2.469l-.837-.4a30.627 30.627 0 00-1.306 2.202zm7.637-.267c-1.005.967-1.474 1.701-1.474 2.235 0 .2.067.367.2.5.168.167.403.234.704.234.268 0 .603-.067.971-.234a7.066 7.066 0 001.005-.533l.268-.834c-.234.167-.535.3-.904.467-.369.167-.603.233-.737.233-.101 0-.168 0-.201-.066-.067-.034-.067-.1-.067-.167 0-.234.402-.734 1.273-1.568.301-.267.536-.534.703-.734.134-.167.201-.4.201-.667 0-.4-.201-.601-.67-.601-.569 0-1.172.2-1.909.634l.302.534c.469-.234.736-.334.87-.367h.134c.067 0 .101.066.101.1 0 .067-.067.133-.134.233l-.302.3c-.1.1-.2.2-.334.3zm11.086.267c-.402.533-.603 1.034-.603 1.468 0 .433.101.734.302.934.234.2.435.3.669.3.369 0 .771-.133 1.24-.467.469-.3.804-.6 1.005-.867.067-.067.134-.1.167-.134h.034c0 .034-.034.1-.067.167-.034.067-.067.167-.101.2-.033.067-.033.134-.067.234-.033.1-.033.2-.033.3 0 .133.033.267.167.4.134.1.302.167.502.167.202 0 .436-.067.771-.234.302-.166.569-.333.838-.533l.234-.834c-.168.1-.402.233-.704.367-.301.133-.468.2-.569.2-.1 0-.134-.067-.134-.2 0-.134.1-.367.268-.734l1.072-2.102-.871-.467-.134.267c-.235-.3-.603-.434-1.038-.434-.436 0-.938.2-1.507.567-.57.4-1.039.867-1.441 1.435zm.637 1.2c0-.3.167-.667.469-1.067.301-.4.669-.767 1.071-1.067.402-.267.737-.434 1.005-.434.234 0 .402.1.569.267l-.636 1.167c-.1.2-.301.434-.569.701-.302.267-.57.467-.871.667-.302.2-.536.3-.67.3-.234 0-.368-.166-.368-.533zm6.598-3.402l-2.378 4.67.971.334.904-1.868a6.072 6.072 0 011.709-.367c-.268.5-.436.834-.503 1a1 1 0 00-.1.4c0 .235.067.402.201.535.167.133.335.2.536.2.268 0 .737-.167 1.407-.534.033.167.1.3.234.367.168.1.335.167.502.167.57 0 1.139-.4 1.809-1.201.067-.1.134-.167.168-.2.033-.067.1-.1.134-.167.167 1.034.536 1.568 1.071 1.568.201 0 .402-.067.67-.267.268-.166.469-.334.67-.5l.268-.834c-.167.1-.368.233-.636.367-.268.133-.469.2-.603.2-.369 0-.603-.367-.67-1.101.837-.834 1.675-1.568 2.512-2.169l-.77-.4c-.302.267-.503.5-.704.634l-.469.467c-.201.167-.402.367-.669.634-.034-.5-.068-1.101-.068-1.768l-.904-.468c0 .268-.033.5-.033.735 0 .633.067 1.367.167 2.168-.435.5-.77.834-.971 1.034-.201.167-.369.267-.469.267-.201 0-.302-.133-.302-.367 0-.1.034-.233.067-.4l-.402.2.034-.033c-.369.167-.569.267-.603.3-.368.2-.636.3-.77.3s-.201-.066-.201-.2c0-.1.033-.233.134-.4l.067-.134c0-.066.033-.1.033-.133l1.139-2.269-.871-.367-.77 1.702c-.201 0-.503 0-.905.066a6.085 6.085 0 00-.77.167l1.005-1.935-.871-.4zm8.977 2.335c-.436.867-.67 1.468-.67 1.835 0 .267.067.434.201.567.1.1.234.167.368.167.502 0 1.306-.534 2.378-1.635l.067.067c-.167.267-.301.5-.435.7-.871 1.435-1.44 2.57-1.675 3.437l1.038.2c.201-.567.536-1.368 1.005-2.436a78.049 78.049 0 012.278-4.303l-.838-.434c-.435.7-.837 1.268-1.239 1.735-.402.5-.737.834-1.038 1.068-.302.233-.503.367-.637.4h-.1c-.101 0-.134-.067-.134-.167s.167-.467.502-1.1l1.139-2.07-.871-.466c-.435.767-.904 1.568-1.339 2.435zm4.689 0c-.436.867-.637 1.468-.637 1.835 0 .267.034.434.168.567.1.1.234.167.368.167.503 0 1.306-.534 2.378-1.635l.067.067c-.167.267-.301.5-.435.7-.871 1.435-1.44 2.57-1.642 3.437l1.005.2c.202-.567.536-1.368 1.039-2.436.469-1.034 1.206-2.468 2.244-4.303l-.837-.434c-.402.7-.838 1.268-1.24 1.735a5.31 5.31 0 01-1.038 1.068c-.301.233-.503.367-.636.4h-.101c-.101 0-.134-.067-.134-.167s.168-.467.502-1.1l1.139-2.07-.87-.466c-.436.767-.871 1.568-1.34 2.435zm12.795 0c-.436.867-.67 1.468-.67 1.835 0 .267.067.434.201.567.1.1.234.167.368.167.503 0 1.306-.534 2.379-1.635l.066.067c-.167.267-.301.5-.435.7-.871 1.435-1.44 2.57-1.641 3.437l1.005.2c.201-.567.535-1.368 1.005-2.436a77.897 77.897 0 012.277-4.303l-.838-.434c-.435.7-.837 1.268-1.239 1.735-.402.5-.737.834-1.038 1.068-.301.233-.502.367-.636.4h-.101c-.1 0-.134-.067-.134-.167s.168-.467.502-1.1l1.139-2.07-.871-.466c-.435.767-.87 1.568-1.339 2.435zm15.809-2.335l-2.412 4.67 1.005.334.905-1.868a6.112 6.112 0 011.674-.367c-.234.5-.402.834-.468 1-.068.134-.134.301-.134.4 0 .235.1.402.234.535s.335.2.536.2c.301 0 .871-.267 1.742-.767.066.166.167.3.301.434.234.233.569.333.971.333.67 0 1.273-.167 1.809-.5.502-.334.905-.735 1.206-1.268.268-.5.402-1.001.402-1.502 0-.433-.101-.8-.335-1.134-.235-.3-.57-.467-1.005-.467-.536 0-1.072.267-1.608.768l.469.567c.436-.4.771-.6 1.005-.6a.7.7 0 01.368.133c.101.1.135.233.135.467 0 .233-.067.5-.168.8-.335-.133-.636-.167-1.005-.167-.335 0-.636.067-.871.234l.503.667c.201-.167.435-.267.737-.267.1 0 .234.034.402.067a3.778 3.778 0 01-.838 1.034c-.335.267-.67.4-1.004.4-.202 0-.369-.066-.436-.2a.666.666 0 01-.134-.433c0-.134.033-.3.067-.5l-.938.4v.033c-.201.1-.302.133-.335.167-.368.2-.636.3-.804.3-.1 0-.167-.066-.167-.2 0-.1.033-.233.134-.4 0 0 0-.067.033-.134.034-.066.067-.1.067-.133l1.139-2.269-.871-.367-.804 1.702c-.201 0-.468 0-.871.066-.435.067-.67.134-.803.167l1.004-1.935-.837-.4z" fill="#FFFFFF"></path>
                        </svg>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto mb-2 mb-lg-0 right-header">
                        <Nav.Link href="#home" className="active">Бидний тухай</Nav.Link>
                        <Nav.Link href="#link">Судлаач оюутнууд</Nav.Link>
                        <Nav.Link href="#link">Бидний дурсамж</Nav.Link>
                        <Nav.Link href="#link">Сургалтууд</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="loader_background">
                <div className="loader">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <h3>INTERNSHIP-2K21...</h3>
                </div>
            </div>
            <div className="motto">
                <p>"work for a cause not for applause"</p>
            </div>
        </div>
    )
}

export default NavBar