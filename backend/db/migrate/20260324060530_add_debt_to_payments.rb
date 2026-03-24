class AddDebtToPayments < ActiveRecord::Migration[8.1]
  def change
    add_reference :payments, :debt, null: false, foreign_key: true
  end
end
