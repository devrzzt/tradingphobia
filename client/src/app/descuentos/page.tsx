import { getDiscounts } from '@/api/getDiscounts'
import Back from '@/components/Back'
import Discounts from './Discounts'
import { IDiscounts } from '@/models/discounts'

const DiscountsPage = async () => {
  const { data }: { data: IDiscounts[] } = await getDiscounts()
  return (
    <>
      <Back />
      <Discounts discounts={data} />
    </>
  )
}

export default DiscountsPage
