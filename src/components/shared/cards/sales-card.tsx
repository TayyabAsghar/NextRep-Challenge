import Image from 'next/image';

export type SalesCardProps = {
    name: string;
    email: string;
    saleAmount: string;
};

const SalesCard = (props: SalesCardProps) => {
    return (
        <div className="flex flex-wrap justify-between gap-3">
            <section className="flex justify-between gap-3">
                <div className=" h-12 w-12 rounded-full bg-background p-1">
                    <Image
                        src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${props.name}`}
                        alt="avatar" width={200} height={200}
                    />
                </div>
                <div className="text-sm">
                    <p className='font-medium'>{props.name}</p>
                    <div className="text-ellipsis overflow-hidden whitespace-nowrap w-[120px] sm:w-auto text-muted-foreground">
                        {props.email}
                    </div>
                </div>
            </section>
            <p>{props.saleAmount}</p>
        </div>
    );
};

export default SalesCard;