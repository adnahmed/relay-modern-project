import {Meta, Story} from '@storybook/react'
import EconomicAnalysis, {EconomicAnalysisProps} from './EconomicAnalysis'

export default {
    title: 'EconomicAnalysis',
    component: EconomicAnalysis
} as Meta

const Template: Story<EconomicAnalysisProps> = args => <EconomicAnalysis {...args} />;

export const Default = Template.bind({});
Default.args = {}