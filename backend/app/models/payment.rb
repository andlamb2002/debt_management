class Payment < ApplicationRecord
    belongs_to :debt

    validates :amount, presence: true
    validates :date_paid, presence: true

    after_save :update_debt_status
    after_destroy :update_debt_status

    private

    def update_debt_status
        total_paid = debt.payments.sum(:amount)
        if total_paid >= debt.principal_amt && debt.status == "active"
            debt.update_column(:status, "paid")
        end
        if total_paid < debt.principal_amt && debt.status == "paid"
            debt.update_column(:status, "active")
        end
    end
end
