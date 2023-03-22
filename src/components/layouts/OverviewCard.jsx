import { ActionIcon } from "@mantine/core";

const OverviewCard = ({ icon, title, color, value }) => {
    return (
        <>
            <div className="card">
                <div className="card_title">
                    <h4>{title}</h4>
                    <ActionIcon styles={{
                        root:{
                            backgroundColor:color,
                        }
                    }} variant="light" color={color} size={45}>
                        {icon}
                    </ActionIcon>
                </div>
                <h2>{value}</h2>
            </div>
        </>
    );
};

export default OverviewCard;
