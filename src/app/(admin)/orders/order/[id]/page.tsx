import { getOrder } from "@/app/(admin)/orders/lib/action";
import { Main } from "@/templates";
import { literals } from "@/lib/literals";
import { OrderCards } from "@/components/orderProducts/OrderCards";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default async function Order({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const id = (await params).id;
  const { order } = await getOrder(id);
  console.log(order);
  return (
    <Main>
      <Card className={"w-2/3"}>
        <CardContent className={"pb-0"}>
          <Accordion type="single" collapsible defaultValue={"item-1"}>
            <AccordionItem value="item-1" className={"border-none"}>
              <AccordionTrigger className={"text-lg"}>
                {literals.details}
              </AccordionTrigger>
              <AccordionContent>
                <div className={"flex gap-3 mb-2"}>
                  <h2>{literals.codeText}</h2>
                  <p className={"font-bold"}>{`#${order.id}`}</p>
                </div>
                <Separator className={"mb-2"} />
                <div className={"flex gap-3 mb-2"}>
                  <h2>{literals.tableText}</h2>
                  <p className={"font-bold"}>{order?.table?.title}</p>
                </div>
                <Separator className={"mb-2"} />
                <div className={"flex gap-3 mb-2"}>
                  <h2>{literals.waitressText}</h2>
                  <p className={"font-bold"}>{order?.waiter?.name}</p>
                </div>
                <Separator className={"mb-2"} />
                <div className={"flex gap-3 mb-2"}>
                  <h2>{literals.costText}</h2>
                  <p className={"font-bold"}>{`${order?.total}€`}</p>
                </div>
                <Separator className={"mb-2"} />
                <div className={"flex gap-3 mb-2 items-center"}>
                  <h2>{literals.completedText}</h2>
                  <Checkbox disabled value={order?.completed} />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
      <div className={"mt-4 w-2/3"}>
        <OrderCards orderProducts={order?.order_products} />
      </div>
    </Main>
  );
}
