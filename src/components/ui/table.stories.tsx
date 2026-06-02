import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
  Table,
  TableCaption,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
} from './table'

const meta = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const invoices = [
  { id: 'INV-001', status: 'Paid', method: 'Credit Card', amount: '$250.00' },
  { id: 'INV-002', status: 'Pending', method: 'Bank Transfer', amount: '$150.00' },
  { id: 'INV-003', status: 'Paid', method: 'PayPal', amount: '$350.00' },
  { id: 'INV-004', status: 'Unpaid', method: 'Credit Card', amount: '$450.00' },
]

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <Table>
        <TableCaption>A list of recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">{invoice.id}</TableCell>
              <TableCell>{invoice.status}</TableCell>
              <TableCell>{invoice.method}</TableCell>
              <TableCell className="text-right">{invoice.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$1,200.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  ),
}
