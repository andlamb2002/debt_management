class Payment < ApplicationRecord
    belongs_to :debt

    validates :amount, presence: true
    validates :date_paid, presence: true
end
