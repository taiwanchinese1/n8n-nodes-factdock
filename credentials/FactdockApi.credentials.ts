import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class FactdockApi implements ICredentialType {
	name = 'factdockApi';

	displayName = 'Factdock API';

	icon: Icon = { light: 'file:../icons/factdock.svg', dark: 'file:../icons/factdock.dark.svg' };

	documentationUrl = 'https://github.com/taiwanchinese1/n8n-nodes-factdock#credentials';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description:
				'Factdock Business API key. Create it on the Developers page of your Factdock account. Search tools need a Platform key.',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.apiKey}}',
			},
		},
	};

	// Listing the tools is free, so testing the credential never uses credits.
	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://data.fact-dock.com',
			url: '/v1/engines',
			method: 'GET',
		},
	};
}
